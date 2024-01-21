export default function Select({ placeholder, options, ...props }) {
    return (
        <select
            className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...props}
        >
            <option value="">
                {placeholder ? placeholder : 'Select an option'}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}
