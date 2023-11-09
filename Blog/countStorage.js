class CountStorage {
    key

    /**
     * 
     * @param {string} key
     * @description
     * Создаёт экземпляр CountStorage для работы с localStorage
     * по указанному ключу
     */
    constructor(key) {
        this.key = key
    }    
    
    /**
     * @description
     * Увеличивает значение на единицу
     * Если значение не определено, то установит его в единицу
     */
    incriment() {
        let value = this.get()
        value++
        localStorage.setItem(this.key, value)
    }

    /**
     * @returns {number} 
     * @description
     * Возвращает значение
     * Если значение не определено, то вернёт ноль
     */
    get() {
        let value = localStorage.getItem(this.key)
        if (value === null) {
            return 0
        } 

        return value
    }
    
}

export default CountStorage
