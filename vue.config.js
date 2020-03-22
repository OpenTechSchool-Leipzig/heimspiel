module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "./node_modules/bulma/bulma.sass";
          @import "@/scss/_classes.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
};
