const crypto = require('crypto');

function anotherInsecurePassword() {
  // GOOD: use a cryptographically secure random suffix
  var suffix = crypto.randomBytes(4).readUInt32BE(0);
  var password = "sssAAAA" + suffix;
  return password;
}