import 'bootstrap/dist/css/bootstrap.min.css'

(function () {
    const bgColors = [
        "#3b5998",
        "#8a3ab9",
        "#F8F8F2"
    ]
    const randomBgColor = (): string => {
        const randomIndex = Math.floor(Math.random() * bgColors.length)
        return bgColors[randomIndex]
    }

    const setRandomBgColor = (): void => {
        document.body.style.backgroundColor = randomBgColor()
    }

    setInterval(() => {
        setRandomBgColor()
    }, 5000)

    setRandomBgColor()


})();
