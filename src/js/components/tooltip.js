import { createPopper, right } from '@popperjs/core';
const el = document.querySelector('.tooltip__btn');
createPopper('.tooltip__btn', '.tooltip__txt',{
  placement: 'right'
});