const config = ({ env }: { env: (key: string) => string }) => ({
    'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 3, // Customize depth
      }
    },
  });
  
  export default config;
  