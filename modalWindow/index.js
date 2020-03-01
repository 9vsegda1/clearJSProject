const modal = $.modal({
     title: 'Modal title',
     closable: true,
     content: `<p>TEST TES TEST</p>
               <p>Lorem ipsum dolor.</p> `,
     width: '800px'
})
// myModal.open()
modal.onClose(() => console.log('on close hook'))
