const Head = (
    <div  className="w-[70px] h-[70px] border-8 rounded-full absolute top-[48px] right-[-30px] " />
)

const Body = (
    <div className="w-[10px] h-[150px] sm:h-[100px] absolute right-0 top-[110px] bg-black "/>
)

const RightArm = (
    <div className="w-[100px] sm:w[70px] h-[10px] bg-black rotate-30 absolute top-[150px] right-[-90px] " />
)

const LeftArm = (
    <div className="w-[100px] sm:w[70px] h-[10px] bg-black rotate-150 absolute top-[150px] right-0 " />
)

const LeftLeg = (
    <div className="w-[100px] sm:w[70px] h-[10px] bg-black rotate-30 absolute top-[275px] sm:top-[225px] right-[-90px] " />
)

const RightLeg = (
    <div className="w-[100px] sm:w[70px] h-[10px] bg-black rotate-150 absolute top-[275px] sm:top-[225px] right-0 " />
)


const BodyParts = [Head , Body , RightArm , LeftArm , RightLeg , LeftLeg ];


type HangManProps = {
    numberOfGuesses : number
}

export default function HangmanDrawing({ numberOfGuesses } : HangManProps ) {
  return (
    <div className="relative ">
        {BodyParts.slice(0 , numberOfGuesses)}
        <div className="h-[50px] w-[10px] absolute top-0 right-0 bg-black" />

        <div className="h-[10px] w-[200px] sm:w-[150px]  ml-[120px] bg-black" />

        <div className="w-[10px]  sm:h-[300px] h-[350px]  bg-black ml-[120px] " />

        <div className="h-[10px] w-[250px] bg-black " />
    </div>
  )
}
