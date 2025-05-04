import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const avatar = {
  name: "Avatar",
  description: "An image element with a fallback for representing the user.",
  components: {
    Default: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          <span className="text-xs">CN</span>
        </AvatarFallback>
      </Avatar>
    ),
    Fallback: (
      <Avatar>
        <AvatarImage src="https://github.com" alt="@shadcn" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          <span className="text-xs">CN</span>
        </AvatarFallback>
      </Avatar>
    ),
  },
};
