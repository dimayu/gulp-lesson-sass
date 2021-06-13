var smartgrid = require('smart-grid');

var settings = {
      outputStyle: 'scss',
      columns: 12,
      offset: '30px',
      mobileFirst: false,
      container: {
            maxWidth: '1200px',
            fields: '375px'
      },
      breakPoints: {
            lg: {
                  width: '1720px',
                  fields: '130px'
            },
            lmd: {
                  width: '1300px',
                  fields: '100px'
            },
            xlmd: {
                  width: '1140px',
                  fields: '100px'
            },
            md: {
                  width: '960px',
                  fields: '100px'
            },
            sm: {
                  width: '780px',
                  fields: '25px'
            },
            xs: {
                  width: '560px',
                  fields: '15px'
            },
            xxs: {
                  width: '440px',
                  fields: '10px'
            }
      }
};

smartgrid('./app/scss', settings);



/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */