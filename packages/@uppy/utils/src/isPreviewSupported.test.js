const isPreviewSupported = require('./isPreviewSupported')

describe('isPreviewSupported', () => {
  it('should return true for any filetypes that browsers can preview', () => {
    const supported = ['image/jpeg', 'image/gif', 'image/png', 'image/svg', 'image/svg+xml', 'image/bmp', 'image/jpg', 'image/webp']
    supported.forEach(ext => {
      expect(isPreviewSupported(ext)).toEqual(true)
    })
    expect(isPreviewSupported('foo')).toEqual(false)
  })
})
