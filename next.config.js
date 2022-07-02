/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAINNET_PRIMARY: process.env.MAINNET_PRIMARY,
    BASE_CLUSTER: process.env.BASE_CLUSTER,
    STAKE_POOL_ADDRESS: process.env.STAKE_POOL_ADDRESS,
    REWARD_DISTRIBUTOR_ADDRESS: process.env.REWARD_DISTRIBUTOR_ADDRESS,
    TOKEN_MANAGER_ADDRESS: process.env.TOKEN_MANAGER_ADDRESS,
    REWARD_MANAGER: process.env.REWARD_MANAGER,
    COLLECTOR: process.env.COLLECTOR,
  },
  async rewrites() {
    return [
      {
        source: '/:path(.*)',
        destination: '/rogue-sharks',
        has: [
          {
            type: 'host',
            value: 'stake.roguesharks.org',
          },
          {
            type: 'host',
            value: 'stake.unfrgtn.space',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
