module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "./node_modules/bulma/bulma.sass";
        `
      }
    }
  }
};
