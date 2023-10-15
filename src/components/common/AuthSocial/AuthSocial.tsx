import { Button } from "@material-tailwind/react"

const AuthSocial = () => {
    return (
        <div className="mt-5">
            <div className="grid grid-cols-2 gap-4  ">
                <Button
                    size="sm"
                    variant="outlined"
                    color="blue-gray"
                    className="flex items-center gap-3"
                >
                    {/* <Image src={GoogleIcon} alt="metamask" className="h-6 w-6" /> */}
                    Sign in with Twitter

                </Button>
                <Button
                    size="sm"
                    variant="gradient"
                    color="light-blue"
                    className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
                >
                    Sign in with Twitter
                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                        {/* <Image src={FacebookIcon} alt="metamask" className="h-6 w-6" /> */}
                    </span>
                </Button>
            </div>
        </div>
    )
}

export default AuthSocial