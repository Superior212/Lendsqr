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
import { Link } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(5).max(50),
});

const LoginForm = () => {
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
          <div className="mt-6  text-sm text-[#39CDCC]">
            <Link to="#" className="text-[12px]">
              FORGOT PASSWORD?
            </Link>
          </div>
          <Button
            className="bg-[#39CDCC] hover:bg-[#213F7D] w-full"
            type="submit">
            LOG IN
          </Button>
        </form>
      </Form>
    </div>
  );
};

type SigninFormProps = {
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  description?: string;
  inputType: string;
  formControl: Control<z.infer<typeof formSchema>>;
};
const SigninForm = ({
  name,
  formControl,
  placeholder,
  description,
  inputType,
}: SigninFormProps) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default LoginForm;
