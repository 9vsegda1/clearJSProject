<<<<<<< HEAD
const fruits = [
  {id: 1, title: 'Яблоки', price: 20, img: ''}
  {id: 2, title: 'Апельсины', price: 30, img: ''}
  {id: 3, title: 'Манго', price: 40, img: ''}
]


/*
* 1. Динамически на основе массива вывести список карточек
* 2. Показать цену в модалке (это должна быть одна модалка)
* 3. Модалка для удаления с 2мя кнопками (удалить отмена)
* --------------------
* 4. При удалении убрать карточку из дом дерева
* {на основе $.modal сделать $.confirm (Promise)}
*
*
* */

const modal = $.modal({
  title: 'Test title',
  closable: true,
  content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      console.log('Primary btn clicked')
    }},
    {text: 'Cansel', type: 'danger', handler() {
      console.log('Danger btn clicked')
    }}
  ]
=======
const modal = $.modal({
     title: 'Modal title',
     closable: true,
     content: `<p>TEST TES TEST</p>
               <p>Lorem ipsum dolor.</p> `,
     width: '800px'
>>>>>>> master
})
// myModal.open()
modal.onClose(() => console.log('on close hook'))
