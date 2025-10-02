export default function ArtList(){
    return(
        <div className="w-full">
            <div className="h-80">
                <img src="https://i.pinimg.com/736x/03/fc/a1/03fca128c37771e015804df115361e98.jpg" alt="" className="h-full w-full object-cover"/>
            </div>

            <div className="flex justify-between w-full mt-2">
                <div className="flex">
                    <img className="w-11 h-10 object-cover rounded-full" src="https://i.pinimg.com/originals/b6/c4/42/b6c4429e6c488da06befe29966792261.jpg" alt="" />
                    <p>SamDoesArt</p>
                </div>

                <div className="flex gap-4">
                    <p>Heart 221</p>
                    <p>Comment 30</p>
                </div>
            </div>
        </div>
    );
};
