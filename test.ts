import sodium from 'libsodium-wrappers'

console.log('browserSizedHash', sodium.crypto_pwhash_SALTBYTES)
