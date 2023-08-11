class GraphModal {
	constructor(options) {
		let defaultOptions = {
			isOpen: ()=>{},
			isClose: ()=>{},
		}
		this.options = Object.assign(defaultOptions, options);
		this.modal = document.querySelector('.modal');
		this.speed = 300;
		this.animation = false;
		this.reOpen = false;
		this.nextWindow = false;
		this.modalContainer = false;
		this.isOpened = false;
		this.previousActiveElement = false;
		this._focusElements = [
				'a[href]',
				'area[href]',
				'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
				'select:not([disabled]):not([aria-hidden])',
				'textarea:not([disabled]):not([aria-hidden])',
				'button:not([disabled]):not([aria-hidden])',
				'iframe',
				'object',
				'embed',
				'[contenteditable]',
				'[tabindex]:not([tabindex^="-"])'
		];
		this.fixBlocks = document.querySelectorAll('.fix-block');
		this.events();
	}

	events() {
		document.addEventListener('click', function(e) {
		 	const clickedElement = e.target.closest(`[data-graph-path]`);
		 	if (clickedElement) {
				let target = clickedElement.dataset.graphPath;
				let animation = clickedElement.dataset.graphAnimation;
				let speed =  clickedElement.dataset.graphSpeed;
				this.animation = animation ? animation : 'fade';
				this.speed = speed ? parseInt(speed) : 300;
				this.nextWindow = document.querySelector(`[data-graph-target="${target}"]`); 
				this.open();
				return;
			}

			if (e.target.closest('.modal__close')) {
				this.close();
				return;
			}
		}.bind(this));

		window.addEventListener('keydown', function(e) {
			if (e.keyCode == 27) {
				if (this.modalContainer.classList.contains('modal-open')) {
					this.close();
				}
			}

			if (e.which == 9 && this.isOpened) {
				this.focusCatch(e);
				return;
			}
		}.bind(this));
		this.modal.addEventListener('click', function(e) {
			if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container') && this.isOpened) {
				this.close();
			}
			if (e.target.classList.contains('order-product__delete')) {
				const closeItem = document.querySelectorAll('.order-modal__item')
				if (closeItem.length == 1 ) {
					this.close()
				}
				
			}
			if (e.target.classList.contains('close__modal')) {
				this.close();
			}
			// console.log(closeItem)
		}.bind(this));

		this.modal.addEventListener('click', function(e) {
			if(e.target.classList.contains('order__btn')) {
				function showToastCloseIframe(title) {
					const innerHtml = `
						<div style="padding: 16px 16px 16px !important; box-sizing: border-box !important; box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31), 0px 8px 12px rgba(9, 30, 66, 0.15) !important;
						border-radius: 3px !important; width: 368px !important;">
							<div style="display: flex !important; justify-content: space-between !important; align-items: center !important; gap: 16px !important; font-family: 'Roboto' !important; font-weight: 500 !important; color: #172B4D !important;">
								<div style="display: flex !important; gap: 16px !important;  align-items: center !important;">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10Z" fill="#0C66E4"/>
									</svg>
									<p style="width: 264px !important; color: #172B4D !important; line-height: 20px !important; font-size: 14px !important; margin: 0 !important; font-weight: 500 !important;">${title}</p>
								</div>
								<svg style="cursor: pointer !important;" id="closeCustom-toast" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8 7.05733L4.47133 3.52867C4.3456 3.40723 4.1772 3.34003 4.0024 3.34155C3.8276 3.34307 3.66039 3.41318 3.53679 3.53679C3.41318 3.66039 3.34307 3.8276 3.34155 4.0024C3.34003 4.1772 3.40723 4.3456 3.52867 4.47133L7.05733 8L3.52867 11.5287C3.40723 11.6544 3.34003 11.8228 3.34155 11.9976C3.34307 12.1724 3.41318 12.3396 3.53679 12.4632C3.66039 12.5868 3.8276 12.6569 4.0024 12.6585C4.1772 12.66 4.3456 12.5928 4.47133 12.4713L8 8.94267L11.5287 12.4713C11.6544 12.5928 11.8228 12.66 11.9976 12.6585C12.1724 12.6569 12.3396 12.5868 12.4632 12.4632C12.5868 12.3396 12.6569 12.1724 12.6585 11.9976C12.66 11.8228 12.5928 11.6544 12.4713 11.5287L8.94267 8L12.4713 4.47133C12.535 4.40984 12.5858 4.33627 12.6207 4.25494C12.6557 4.1736 12.6741 4.08612 12.6748 3.9976C12.6756 3.90908 12.6587 3.82129 12.6252 3.73936C12.5917 3.65743 12.5422 3.583 12.4796 3.5204C12.417 3.45781 12.3426 3.40831 12.2606 3.37479C12.1787 3.34126 12.0909 3.3244 12.0024 3.32517C11.9139 3.32594 11.8264 3.34433 11.7451 3.37927C11.6637 3.4142 11.5902 3.46499 11.5287 3.52867L8 7.05733Z" fill="#6B778C"/>
								</svg>             
							</div>  
						</div>
					`
					const toast = document.createElement("div");
					toast.innerHTML = innerHtml;
					toast.style.setProperty('position', 'fixed', 'important');
					toast.style.setProperty('top', '20px', 'important');
					toast.style.setProperty('right', '-300px', 'important');
					toast.style.setProperty('color', 'white', 'important');
					toast.style.setProperty('background-color', '#FFFFFF', 'important');
					toast.style.setProperty('border-radius', '5px', 'important');
					toast.style.setProperty('z-index', '2147483637', 'important');
					toast.style.setProperty('opacity', '0', 'important');
					toast.style.setProperty('transition', "right 0.5s ease, opacity 0.5s ease", 'important');
					toast.style.setProperty('font-size', "14px", 'important');
					document.body.appendChild(toast);
					document.getElementById('closeCustom-toast').addEventListener('click', () => {
						toast.style.setProperty('opacity', "0", 'important');
						toast.style.setProperty('right', "-300px", 'important');
						setTimeout(() => {
							document.body.removeChild(toast);
						}, 500);
					})
				
					setTimeout(() => {
						toast.style.setProperty('right', "20px", 'important');
						toast.style.setProperty('opacity', "1", 'important');
					}, 100);
				setTimeout(() => {
						toast.style.setProperty('opacity', "0", 'important');
						toast.style.setProperty('right', "-300px", 'important');
						setTimeout(() => {
							document.body.removeChild(toast);
						}, 500);
					}, 3000);
				}
				this.close();
				showToastCloseIframe('Ваше замовлення відправлено!');
				const inputValue = document.querySelectorAll('.order__input');
				inputValue.forEach((item) => {
					item.value = '';
				})


			}
		}.bind(this));
	}

	open(selector) {
		this.previousActiveElement = document.activeElement;

		if (this.isOpened) {
			this.reOpen = true;
			this.close();
			return;
		}

		this.modalContainer = this.nextWindow;

		if (selector) {
			this.modalContainer = document.querySelector(`[data-graph-target="${selector}"]`);
		}

		this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
		this.modal.classList.add('is-open');
		this.disableScroll();
		
		this.modalContainer.classList.add('modal-open');
		this.modalContainer.classList.add(this.animation);
		
		setTimeout(() => {
			this.options.isOpen(this);
			this.modalContainer.classList.add('animate-open');
			this.isOpened = true;
			this.focusTrap();
		}, this.speed);
	}
	
	close() {
		if (this.modalContainer) {
			this.modalContainer.classList.remove('animate-open');
			this.modalContainer.classList.remove(this.animation);
			this.modal.classList.remove('is-open');
			this.modalContainer.classList.remove('modal-open');
			
			this.enableScroll();
			this.options.isClose(this);
			this.isOpened = false;
			this.focusTrap();

			if (this.reOpen) {
				this.reOpen = false;
				this.open();
			}
		}
	}

	focusCatch(e) {
		const nodes = this.modalContainer.querySelectorAll(this._focusElements);
		const nodesArray = Array.prototype.slice.call(nodes);
		const focusedItemIndex = nodesArray.indexOf(document.activeElement)
		if (e.shiftKey && focusedItemIndex === 0) {
			nodesArray[nodesArray.length - 1].focus();
			e.preventDefault();
		}
		if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
			nodesArray[0].focus();
			e.preventDefault();
		}
	}

	focusTrap() {
		const nodes = this.modalContainer.querySelectorAll(this._focusElements);
		if (this.isOpened) {
			if (nodes.length) nodes[0].focus();
		} else {
			this.previousActiveElement.focus();
		}
	}

	disableScroll() {
		let pagePosition = window.scrollY;
		this.lockPadding();
		document.body.classList.add('disable-scroll');
		document.body.dataset.position = pagePosition;
		document.body.style.top = -pagePosition + 'px';
	}

	enableScroll() {
		let pagePosition = parseInt(document.body.dataset.position, 10);
		this.unlockPadding();
		document.body.style.top = 'auto';
		document.body.classList.remove('disable-scroll');
		window.scroll({
			top: pagePosition,
			left: 0
		});
		document.body.removeAttribute('data-position');
	}

	lockPadding() {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		this.fixBlocks.forEach((el) => {
			el.style.paddingRight = paddingOffset;
		});
		document.body.style.paddingRight = paddingOffset;
	}

	unlockPadding() {
		this.fixBlocks.forEach((el) => {
			el.style.paddingRight = '0px';
		});
		document.body.style.paddingRight = '0px';
	}
}

// new Modal().open('second');
