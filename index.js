function mooncakeSays(message) {
  let mooncake = '(0.o)';

  if ( !message ) mooncake;

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;