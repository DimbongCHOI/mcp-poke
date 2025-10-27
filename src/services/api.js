import axios from 'axios'

// Direct Pokemon API calls (no backend server needed)
const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2'

// Create axios instance for Pokemon API
const pokeAPI = axios.create({
  baseURL: POKEAPI_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
pokeAPI.interceptors.request.use(
  (config) => {
    console.log(`Pokemon API Request: ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error('Pokemon API Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
pokeAPI.interceptors.response.use(
  (response) => {
    console.log(`Pokemon API Response: ${response.status} ${response.config.url}`)
    return response
  },
  (error) => {
    console.error('Pokemon API Response Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

// Korean Pokemon name mapping
import { KOREAN_TO_ENGLISH } from '../pokemon-mappings.js'

// Helper function to convert Korean name to English
const convertKoreanToEnglish = (name) => {
  return KOREAN_TO_ENGLISH[name.toLowerCase()] || name.toLowerCase()
}

export const pokemonAPI = {
  // Get Pokemon list with pagination
  getPokemonList: async (offset = 0, limit = 20) => {
    try {
      const response = await pokeAPI.get(`/pokemon?offset=${offset}&limit=${limit}`)
      return response.data
    } catch (error) {
      console.error('Pokemon list error:', error.response?.data || error.message)
      throw new Error(`포켓몬 목록을 가져오는데 실패했습니다: ${error.response?.data?.error || error.message}`)
    }
  },

  // Get Pokemon by ID or name
  getPokemon: async (identifier) => {
    try {
      // Try direct identifier first (for IDs)
      if (!isNaN(identifier)) {
        const response = await pokeAPI.get(`/pokemon/${identifier}`)
        return response.data
      }
      
      // Try Korean name conversion
      const englishName = convertKoreanToEnglish(identifier)
      const response = await pokeAPI.get(`/pokemon/${englishName}`)
      
      return response.data
    } catch (error) {
      // If Korean conversion fails, try original identifier
      try {
        const response = await pokeAPI.get(`/pokemon/${identifier}`)
        return response.data
      } catch (secondError) {
        throw new Error(`포켓몬 "${identifier}"을 찾을 수 없습니다.`)
      }
    }
  },

  // Get Pokemon by type
  getPokemonByType: async (type) => {
    try {
      const response = await pokeAPI.get(`/type/${type}`)
      return response.data
    } catch (error) {
      throw new Error(`타입 "${type}"의 포켓몬을 찾을 수 없습니다.`)
    }
  },

  // Get all Pokemon types
  getPokemonTypes: async () => {
    try {
      const response = await pokeAPI.get('/type')
      return response.data
    } catch (error) {
      console.error('Pokemon types error:', error.response?.data || error.message)
      throw new Error(`포켓몬 타입 목록을 가져오는데 실패했습니다: ${error.response?.data?.error || error.message}`)
    }
  },

  // Search Pokemon (simplified - just get Pokemon by name)
  searchPokemon: async (query) => {
    try {
      // Try to get Pokemon directly
      const pokemon = await pokemonAPI.getPokemon(query)
      return {
        results: [pokemon],
        count: 1
      }
    } catch (error) {
      console.error('Pokemon search error:', error.response?.data || error.message)
      throw new Error(`포켓몬 검색에 실패했습니다: ${error.response?.data?.error || error.message}`)
    }
  },

  // Get Pokemon stats (same as getPokemon)
  getPokemonStats: async (identifier) => {
    try {
      const pokemon = await pokemonAPI.getPokemon(identifier)
      return {
        stats: pokemon.stats,
        name: pokemon.name,
        id: pokemon.id
      }
    } catch (error) {
      throw new Error(`포켓몬 "${identifier}"의 능력치를 가져오는데 실패했습니다.`)
    }
  },
}

// Simple chat simulation (no AI backend)
export const chatAPI = {
  sendMessage: async (message) => {
    try {
      // Simple keyword-based responses
      const lowerMessage = message.toLowerCase()
      
      if (lowerMessage.includes('피카츄')) {
        const pokemon = await pokemonAPI.getPokemon('피카츄')
        return {
          response: `피카츄 정보: ${pokemon.korean_name || pokemon.name} (ID: ${pokemon.id})`,
          pokemon: pokemon
        }
      }
      
      if (lowerMessage.includes('리자몽')) {
        const pokemon = await pokemonAPI.getPokemon('리자몽')
        return {
          response: `리자몽 정보: ${pokemon.korean_name || pokemon.name} (ID: ${pokemon.id})`,
          pokemon: pokemon
        }
      }
      
      return {
        response: `"${message}"에 대한 응답입니다. 포켓몬 이름을 말씀해주시면 정보를 제공해드릴게요!`,
        pokemon: null
      }
    } catch (error) {
      throw new Error('AI 어시스턴트와의 통신에 실패했습니다.')
    }
  },

  getChatHistory: async () => {
    return { messages: [] }
  },

  clearChatHistory: async () => {
    return { success: true }
  },
}

export default pokeAPI
