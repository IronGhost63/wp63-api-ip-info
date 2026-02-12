/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const inbound = request.cf;

    const data = {
      ipAddress: request.headers.get('cf-connecting-ip'),
      continent: inbound.continent,
      country: inbound.country,
      region: inbound.region,
      city: inbound.city,
      isp: {
        id: inbound.asn,
        name: inbound.asOrganization,
      }
    };

    return Response.json( data );
  },
};
