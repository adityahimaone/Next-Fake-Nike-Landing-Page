import Button from '@/lib/components/ui/Button';

const Subscribe = () => {
  return (
    <section id="contact-us" className="padding-x w-full py-16 sm:py-32">
      <div className="max-container flex items-center justify-between gap-10 max-lg:flex-col">
        <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
          Sign Up from <span className="text-coral-red">Updates</span> &
          Newsletter
        </h3>
        <div className="flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border sm:border-slate-gray lg:max-w-[40%]">
          <input
            type="text"
            name="email"
            id="email-newsletter"
            placeholder="subscribe@nike.com"
            className="input"
          />
          <div className="flex items-center max-sm:w-full max-sm:justify-end">
            <Button label="Sign Up" fullWidth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
