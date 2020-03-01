const fruits = [
  {id: 1, title: 'Яблоки', price: 20, img: 'https://xn----7sbaoeae1bm2adnh7g.xn--p1ai/uploads/s/u/i/3/ui3nkmtbnsta/img/full_oDCjxV8h.jpg'},
  {id: 2, title: 'Апельсины', price: 30, img: 'https://avatars.mds.yandex.net/get-zen_doc/1590365/pub_5e29ce6b78125e00b13d3f0a_5e29cfc22b616959fd64242c/scale_1200'},
  {id: 3, title: 'Манго', price: 40, img: 'https://i2.wp.com/journey-assist.com/wp-content/uploads/2019/08/%D0%9C%D0%B0%D0%BD%D0%B3%D0%BE.jpg?fit=1200%2C960&ssl=1'},
]


/*
* 1. Динамически на основе массива вывести список карточек +
* 2. Показать цену в модалке (это должна быть одна модалка)
* 3. Модалка для удаления с 2мя кнопками (удалить отмена)
* --------------------
* 4. При удалении убрать карточку из дом дерева
* {на основе $.modal сделать $.confirm (Promise)}
*
*
* */

function cardsGenerate(cards){
  const wrap = document.createElement('div')
  wrap.classList.add('row')



  cards.forEach(elem => {

    const card = document.createElement('div')
    card.classList.add('col')
    card.insertAdjacentHTML('afterbegin', `
      <div class="card">
        <img class="card-img-top" style="height: 300px" src="${elem.img}" alt="Card image">
        <div class="card-body">
          <h5 class="card-title">${elem.title}</h5>
          <a href="" class="btn btn-primary" data-info="true">Посмотреть цену</a>
          <a href="#" class="btn btn-danger">Удалить</a>
        </div>
      </div>
    `)

    card.querySelector('.btn-primary').addEventListener('click', (event) => {
        event.preventDefault()
        const cardModal = $.modal({
          closable: true,
          content: `Цена: ${elem.price}`,
          title: elem.title,
          width: '400px',
          footerButtons: [
            {text: 'Ok', type: 'primary', handler() {
            cardModal.close()
            }},
          ]
        })
        cardModal.open()
        cardModal.onClose(() => cardModal.destroy())

      } )

    wrap.appendChild(card)
  })

  return wrap
}

document.querySelector('.container').append(cardsGenerate(fruits))














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
})










// myModal.open()
modal.onClose(() => console.log('on close hook'))
