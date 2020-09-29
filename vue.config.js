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
    }
  }