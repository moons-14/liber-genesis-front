import clsx from "clsx"

export const Avatar: React.FC<{ src: string, name: string, size?: "normal", rounded?: "sm" | "full" }> = ({
    size = "normal",
    rounded = "full",
    src,
    name
}) => {
    return (<div
        className={clsx(
            {
                "h-12 w-12": size === "normal",
                "rounded-full": rounded === "full",
                "rounded-sm": rounded === "sm"
            },
            "overflow-hidden"
        )}
    >
        <img src={src} alt={name}
            className={clsx(
                {
                    "h-12 w-12": size === "normal",
                },
            )}
        />
    </div>)
}