# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    # pkgs.go
    # pkgs.python311
    # pkgs.python311Packages.pip
    pkgs.nodejs_22
    pkgs.jdk
    # pkgs.nodePackages.nodemon
  ];

  # Sets environment variables in the workspace.
  env = {
    JAVA_HOME = "${pkgs.jdk}";
  };

  # Search for the starship package and use it to customize the shell prompt.
  programs.starship.enable = true;

  # Lets you review, comment on, and merge pull requests from within your IDE.
  extensions.github-community.vscode-pull-request-github.enable = true;

  # Defines a command that will be run on startup.
  startup.prebuild = "echo 'prebuild command executed' > .prebuild_test";

  # Defines tasks that can be run from the command palette.
  # tasks.hello = {
  #   name = "Say Hi";
  #   command = "echo \'Hi from your project\'s dev.nix!\'";
  # };
}
