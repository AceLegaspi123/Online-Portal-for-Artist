export default function ArtList(){
    return(
        <div>
            <div>
                <img src="https://tse3.mm.bing.net/th/id/OIP.NTL-39zdrmgI0lZX4ZH3bQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
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
