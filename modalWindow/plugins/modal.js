function _createModal(options = {}) {
  const modal = document.createElement('div')
  modal.classList.add('vmodal')
  modal.insertAdjacentHTML('afterbegin',`

    <div class="modal-overlay">
      <div class="modal-window" style="width: ${options.width ? options.width : '400px'}">
        <div class="modal-header">
          <span class="modal-title">${options.title || ''}</span>
          <span class="modal-close">${options.closable ? '&times;' : '' }</span>
        </div>
        <div class="modal-body">
          ${options.content || ''}
        </div>
        <div class="modal-footer">
          <button>Ok</button>
          <button>Cansel</button>
        </div>

      </div>
    </div>

  `)
  document.body.appendChild(modal)
  return modal
}

function _closeModal(){
  modal.close()
}

$.modal = function(options) {
  const ANIMATION_SPEED = 200
  const $modal = _createModal(options)
  let closing = false
  $modal.querySelector('.modal-close').onclick =  _closeModal
  $modal.querySelector('.modal-window').onclick = (event) => event.stopPropagation()
  $modal.querySelector('.modal-overlay').onclick =  _closeModal
  return {
    open() {
      !closing && $modal.classList.add('open')
    },
    close() {
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      setTimeout(() => {
        $modal.classList.remove('hide')
        closing = false
      }, ANIMATION_SPEED)

    },
    destroy() {
      $modal.remove()      
    }
  }
}


/*
* options = {
*   title: string
*   closable: boolean
*   content: string
*   width: string ('400px')
* }
* destroy(): void
* Окно должно закрываться
* -----++++
* setContent(html: string): void | PUBLIC
* onClose(): void
* onOpen(): void
* beforeClose(): boolean
* ======= animate

* */
