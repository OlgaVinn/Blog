import CountStorage from "./countStorage.js";

class ClickCounter {
    count
    storage

    /**
     * @param {string} buttonSelector 
     * @param {string} countSelector 
     * @param {CountStorage} storage
     * @description
     * Создаёт экземпляр класса ClickCounter, 
     * который связывается с buttonSelector, при нажатии на который
     * увеличивается счётчик в элементе соответствующему countSelector,
     * используя при этом storage для хранения значений
     */
    constructor(buttonSelector, countSelector, storage) {
        let button = document.querySelector(buttonSelector)
        this.count = document.querySelector(countSelector)
        if (!button || !this.count) {
            throw new Error("Не найдены элементы для указанных селекторов")
        }

        this.storage = storage
        button.addEventListener(
            "click",
            () => {
                this.storage.incriment()
                this.drawCount()
            }
        )
        this.drawCount()
    }

    drawCount() {
        let value = this.storage.get() 
        if (value === 0) {
            return
        }
        
        this.count.classList.remove("hide")
        this.count.textContent = value 
    }
}

export default ClickCounter
