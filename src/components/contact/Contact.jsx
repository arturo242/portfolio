import { forwardRef } from "react"

export const Contact = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} id="contact" className="visualHeader"></div>
      <h2 className="color-secondary">Contact</h2>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum sem non massa vulputate ornare. Duis eleifend, nisi id congue aliquet, felis sem ornare orci, et rutrum orci ante nec mi. Cras vestibulum rutrum massa et lacinia. Nullam commodo maximus felis et condimentum. Donec in mauris eros. Suspendisse potenti. Curabitur eu ante sollicitudin arcu pulvinar volutpat. Aliquam eros elit, tincidunt semper convallis et, ornare ac enim. Praesent vitae tincidunt eros. Aliquam et metus quam. Nulla facilisi. Maecenas fringilla est et enim luctus venenatis. Aliquam nunc turpis, lacinia aliquam lobortis vel, pretium ut dolor. Phasellus ac augue libero. Ut at ultricies ipsum. Integer enim velit, gravida ut posuere quis, dictum quis ligula.</p>
      </div>
    </>
  )
})
