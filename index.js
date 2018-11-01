window.addEventListener('load', function() {
  // name attr
  const editor = myFrame.document;
  // eidtable
  editor.designMode = 'on'

  const fontTools = [boldButton, italicButton, supButton, subButton, strikeButton, unlinkButton, undoButton, redoButton]
  const changeTools = [fontColorButton, highlightButton, fontChanger, fontSizeChanger]

  fontTools.forEach((target) =>  {
    target.addEventListener('click', (e) => {
        editor.execCommand(target.dataset.command, false, null)
    })
  })

  changeTools.forEach(target => {
    target.addEventListener('change', (e) => {
      editor.execCommand(target.dataset.command, false, e.target.value)
    })
  })

  orderedListButton.addEventListener('click', function() {
    editor.execCommand("InsertOrderedList", false, `newOL${Math.round(Math.random()*1000)}`)
  })

  unorderedListButton.addEventListener('click', function() {
    editor.execCommand("InsertUnorderedList", false, `newUOL${Math.round(Math.random()*1000)}`)
  })

  linkButton.addEventListener('click', function() {
    var url = prompt('Enter a URL', "http;//")
    editor.execCommand("CreateLink", false, url)
  })

})