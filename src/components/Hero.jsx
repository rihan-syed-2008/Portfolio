function Hero({name, role, description}){
  return(
    <section>
      <div className="flex flex-col lg:flex-row items-center justify-between p-8">
        <div className="flex-1 text-center">
          <h2 className="text-3xl lg:text-6xl">{name}</h2>
          <h3>{role}</h3>
        </div>
        <div className="flex-1 text-center">
          Image
        </div>
      </div>

      <p className="p-4">{description}</p>
    </section>
  )
}
export default Hero