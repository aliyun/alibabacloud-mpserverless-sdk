ABM_PATHS = core mongo services
ABM_PREFIX = @alicloud/mpserverless-
# @alicloud/ 前缀的外部包
ALC_PATHS = mpserverless-sdk
ALC_PREFIX = @alicloud/
# SDK 包标记出来
SDK_PATHS = mpserverless-sdk 
ALC_WEBPACK_PATHS = mpserverless-sdk
# 告知不是文件
.PHONY: test authors coverage

lint:
	$(call tslint,$(P))

lint-all:
	$(foreach package, $(ABM_PATHS), $(call tslint,$(package)))

build:
	# 如果是 ant-basement 的
	$(if $(filter $(P), $(ABM_PATHS)), $(call tsc,$(ABM_PREFIX),$(P)),)
	# 如果是 alicloud 的
	$(if $(filter $(P), $(ALC_PATHS)), $(call tsc,$(ALC_PREFIX),$(P)),)
	# 如果是 SDK，则不用 bootstrap
	$(if $(filter $(P), $(SDK_PATHS)), , lerna bootstrap --hoist)
	# 如果是小程序 SDK，执行 webpack
	$(if $(filter $(P), $(ALC_WEBPACK_PATHS)), lerna run build --scope=$(ALC_PREFIX)$(P),)

build-all:
	$(foreach package, $(ABM_PATHS), $(call tsc,$(ABM_PREFIX),$(package)))
	$(foreach package, $(ALC_PATHS), $(call tsc,$(ALC_PREFIX),$(package)))
	$(foreach package, $(ALC_WEBPACK_PATHS), lerna run build --scope=$(ALC_PREFIX)$(package))

define tsc
	# 清空缓存文件
	rm -rf packages/$(2)/dist;
	# 执行 TypeScript 转译
	lerna run tsc --scope=$(1)$(2);
endef

define tslint
	# 执行 TSLint
	tslint -c tslint.json -p packages/$(1);
endef
