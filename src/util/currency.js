const Currency = {
    format: (price) => {
        return `$${Number.parseFloat(price).toFixed(2)}`
    }
}

export default Currency;