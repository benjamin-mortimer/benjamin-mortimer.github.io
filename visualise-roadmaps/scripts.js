function showHide(elementId, toggleId) {
    var element = document.getElementById(elementId)
    var toggle = document.getElementById(toggleId)
    if (element.style.display === 'none') {
        element.style.display = 'inline-block'
        toggle.innerHTML = 'Less'
    } else {
        element.style.display = 'none'
        toggle.innerHTML = 'More'
    }
}
