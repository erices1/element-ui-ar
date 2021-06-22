import { t } from 'element-ui-ar/src/locale';

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
