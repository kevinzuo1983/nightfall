import utils from 'zkp-utils';

export default async function({ name, email, address, shhIdentity }) {
  const hash = await utils.rndHex(27);
  return {
    name,
    email,
    address: address.toLowerCase(),
    shh_identity: shhIdentity,
    secretkey: hash,
    publickey: utils.hash(hash),
  };
}
