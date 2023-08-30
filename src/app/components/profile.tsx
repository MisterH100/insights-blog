import Link from "next/link";

Link
const Profile = () => {
    return (
        <article className="w-full h-[500px] md:h-[300px] p-[40px] flex justify-center">
            <div className="primary w-[500px] md:w-[800px] h-[400px] md:h-[200px] rounded px-[40px] py-[20px] md:py-0 flex flex-col md:flex-row items-center gap-[40px]">
                <div className="secondary w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
                    
                </div>
                <div className="secondary flex-1 h-[150px] p-[10px] whitespace-wrap">
                    <h1 className="text-[1.5rem]">Name</h1>
                    <p className="text-[1rem] pt-[6px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed placeat,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed placeat </p>
                    <div className="flex gap-[40px] pb-[6px] text-[0.8rem]">
                        <Link href={'/'}>Github</Link>
                        <p>followers</p>
                        <p>status</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Profile;