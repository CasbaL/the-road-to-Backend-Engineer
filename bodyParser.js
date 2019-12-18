function bodyParse(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let data = '';
      ctx.req.addListener('data', d => (data += d));
      ctx.req.addListener('end', () => resolve(data));
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = bodyParse;
