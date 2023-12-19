import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  'https://rquwntqrmfmwtzzlbjci.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdXdudHFybWZtd3R6emxiamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMDYzNTEsImV4cCI6MjAxNjY4MjM1MX0.szFlkP1hTlddGoE8akJrt78fCjB1XVIhWF8ZrKCoxZw',
)

function LoginPage() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      // forward to success callback
      navigate("/admission");
    } else {
      // forward to login callback
      navigate("/");
    }
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <nav className="bg-black text-white p-4 w-full mb-20">
        <h1 className="text-2xl font-bold text-center">Yoga Classes</h1>
      </nav>

    <h3 className="font-bold mb-6 text-center">Please Sign In and continue to fill out your admission form!</h3> 
      <div className="bg-white p-8 rounded shadow-md w-96 mt-4">

        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google"]}
        />

      </div>

      <footer className="bg-black text-white p-4 w-full mt-7">
        <p className="text-center">© 2023 Yoga Classes</p>
      </footer>
    </div>
  );
}

export default LoginPage;
