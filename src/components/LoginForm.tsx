import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldPath, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .max(50, "Maximum length is 50 characters"),
  password: z
    .string()
    .min(5, "Minimum length is 5 characters")
    .max(50, "Maximum length is 50 characters"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <SigninForm
            name="email"
            placeholder="Email"
            inputType="email"
            formControl={form.control}
          />
          <SigninForm
            name="password"
            placeholder="Password"
            inputType="password"
            formControl={form.control}
          />
          <div className="mt-6 text-sm text-[#39CDCC]">
            <Link to="/forgot-password" className="font-[500] text-[11px]">
              FORGOT PASSWORD?
            </Link>
          </div>
          <Button
            onClick={() => navigate("/user")}
            className="bg-[#39CDCC] hover:bg-[#213F7D] w-full"
            type="submit">
            LOG IN
          </Button>
        </form>
      </Form>
    </div>
  );
};

// SigninForm component props
type SigninFormProps = {
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  description?: string;
  inputType: string;
  formControl: Control<z.infer<typeof formSchema>>;
};

// SigninForm component
const SigninForm = ({
  name,
  formControl,
  placeholder,
  description,
  inputType,
}: SigninFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative">
              <Input
                placeholder={placeholder}
                type={
                  showPassword && inputType === "password" ? "text" : inputType
                }
                {...field}
              />
              {inputType === "password" && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-[#39CDCC] leading-5">
                  {showPassword ? "Hide" : "Show"}
                </button>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default LoginForm;
