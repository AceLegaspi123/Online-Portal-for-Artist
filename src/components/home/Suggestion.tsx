import SuggestionList from "./SuggestionList"

export default function Suggestion() {
    return(
    <div>
        <div className="flex -ml-3 gap-2 justify-start items-start mt-3 ">
            <SuggestionList />
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