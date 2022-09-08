package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/checkers module sentinel errors
var (
	ErrInvalidRed       = sdkerrors.Register(ModuleName, 1100, "red address is invalid: %s")
	ErrInvalidBlack     = sdkerrors.Register(ModuleName, 1101, "black address is invalid: %s")
	ErrGameNotParseable = sdkerrors.Register(ModuleName, 1102, "game cannot be parsed")
)
