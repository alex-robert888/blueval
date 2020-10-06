const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/style/classes/_positioning.scss";
                        @import "@/assets/style/classes/_text.scss";
                        @import "@/assets/style/classes/_button.scss";
                        @import "@/assets/style/classes/_form.scss";
                        @import "@/assets/style/variables/_colors.scss";
                        @import "@/assets/style/variables/_dimensions.scss";
                        `
        }
      }
    },

    configureWebpack: () => {
      if (process.env.NODE_ENV !== 'production') return;
      return {
        plugins: [
          new PrerenderSPAPlugin(
            // Absolute path to compiled SPA
            path.resolve(__dirname, 'dist'),
            // List of routes to prerender
            [ '/'],
            {
              // options
            }
          ),
        ]
      }
    }
  }