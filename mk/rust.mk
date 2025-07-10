RTARGET = x86_64-unknown-linux-gnu

$(RUSTUP) $(CARGO):
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
	rustup target add $(RTARGET)
	rustup component add rust-analyzer rustfmt
	cargo install cargo-watch cargo-binutils
