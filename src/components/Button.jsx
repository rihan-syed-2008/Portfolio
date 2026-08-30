function Button({children,href}){
  return(
    <div >
      <a className="bg-[#D4FF3D] text-[#14180A] px-4 py-2 rounded-md inline-block font-medium" href={href}>{children}</a>
    </div>
  )
}
export default Button;