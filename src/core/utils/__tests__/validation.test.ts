import { isRequired, isEmail } from '../validation'

describe('Validation', () => {
  describe('isRequired', () => {
    it('should return false if value is empty', () => {
      expect(isRequired('')).toEqual(false)
    })

    it('should return true if value is not empty', () => {
      expect(isRequired('test')).toEqual(true)
    })
  })

  describe('isEmail', () => {
    it('should return false if value is empty', () => {
      expect(isEmail('')).toEqual(false)
    })

    it('should return false if value is not empty', () => {
      expect(isEmail('test')).toEqual(false)
    })

    it('should return false if value is has @', () => {
      expect(isEmail('test@')).toEqual(false)
    })

    it('should return false if value is has @domain', () => {
      expect(isEmail('test@domain')).toEqual(false)
    })

    it('should return true if value is a valid email', () => {
      expect(isEmail('test@domain.com')).toEqual(true)
    })
  })
})
