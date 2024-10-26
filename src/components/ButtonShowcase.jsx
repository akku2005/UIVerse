// src/components/ButtonShowcase.jsx
import { useState } from "react";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { SecondaryButton } from "./buttons/SecondaryButton";
import { IconButton } from "./buttons/IconButton";
import { LoadingButton } from "./buttons/LoadingButton";
import { GradientButton } from "./buttons/GradientButton";
import { RoundedButton } from "./buttons/RoundedButton";
import { AnimationButton } from "./buttons/AnimationButton";
import { SocialButton } from "./buttons/SocialButton";

export const ButtonShowcase = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="p-4 border rounded-lg">
        <h3 className="mb-2 font-semibold">Primary Button</h3>
        <PrimaryButton>Click me!</PrimaryButton>
      </div>

      <div className="p-4 border rounded-lg">
        <h3 className="mb-2 font-semibold">Secondary Button</h3>
        <SecondaryButton>Click me!</SecondaryButton>
      </div>

      <div className="p-4 border rounded-lg">
        <h3 className="mb-2 font-semibold">Icon Button</h3>
        <IconButton
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          }
        >
          Click me!
        </IconButton>
      </div>

      <div className="p-4 border rounded-lg">
        <h3 className="mb-2 font-semibold">Loading Button</h3>
        <LoadingButton loading={loading} onClick={() => setLoading(!loading)}>
          Click me!
        </LoadingButton>
      </div>

      <div className="p-4 border rounded-lg">
        <h3 className="mb-2 font-semibold">Gradient Button</h3>
        <GradientButton>Click me!</GradientButton>
      </div>

      <div className="p-4 border rounded-lg">
        <h3 className="mb-2 font-semibold">Rounded Button</h3>
        <RoundedButton>Click me!</RoundedButton>
      </div>

      <div className="p-4 border rounded-lg">
        <h3 className="mb-2 font-semibold">Animation Button</h3>
        <AnimationButton>Click me!</AnimationButton>
      </div>

      <div className="p-4 border rounded-lg">
        <h3 className="mb-2 font-semibold">Social Button</h3>
        <SocialButton platform="twitter">Tweet!</SocialButton>
        <SocialButton platform="facebook">Like!</SocialButton>
        <SocialButton platform="github">Star!</SocialButton>
      </div>
    </div>
  );
};
