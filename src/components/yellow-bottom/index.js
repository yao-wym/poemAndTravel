require('./style.styl');

module.exports = {
	template: require('./template.html'),
	data:function () {
    // return { subtitle: 123 }
  },
	props: ['subtitle','leftLabel','rightLabel']
} 