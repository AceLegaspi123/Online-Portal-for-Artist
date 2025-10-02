import SuggestionList from "./SuggestionList"

export default function Suggestion() {
    return(
        <div>
            <h3 className="text-1xl font-bold ">Explore Arts</h3>
            

            <div className="flex flex-wrap -ml-3 gap-2 justify-start items-start mt-3 ">
                <SuggestionList/>
                <SuggestionList />
                <SuggestionList />
                <SuggestionList />
                <SuggestionList />
                <SuggestionList />
                <SuggestionList />
                <SuggestionList />
            </div>
        </div>
    )
}